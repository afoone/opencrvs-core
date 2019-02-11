import { IFormField, IFormData, IAttachment } from '../..'
import {
  GQLHumanName,
  GQLAddress,
  GQLRegWorkflow,
  GQLComment,
  GQLAttachment
} from '@opencrvs/gateway/src/graphql/schema'

export const nameFieldTransformer = (
  language: string,
  transformedFieldName?: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  const selectedName =
    queryData[sectionId] &&
    queryData[sectionId].name &&
    (queryData[sectionId].name as GQLHumanName[]).find(
      name => name.use === language
    )
  const nameKey = transformedFieldName ? transformedFieldName : field.name
  if (!selectedName || !selectedName[nameKey]) {
    return transformedData
  }
  if (!transformedData[sectionId]) {
    transformedData[sectionId] = {}
  }
  transformedData[sectionId][field.name] = selectedName[nameKey]
  return transformedData
}

export const fieldValueTransformer = (transformedFieldName: string) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  if (queryData[sectionId] && queryData[sectionId][transformedFieldName]) {
    transformedData[sectionId][field.name] =
      queryData[sectionId][transformedFieldName]
  }
  return transformedData
}

export const bundleFieldToSectionFieldTransformer = (
  transformedFieldName?: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  if (queryData[transformedFieldName ? transformedFieldName : field.name]) {
    transformedData[sectionId][field.name] =
      queryData[transformedFieldName ? transformedFieldName : field.name]
  }
  return transformedData
}

export function arrayToFieldTransformer(
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) {
  if (
    queryData[sectionId] &&
    queryData[sectionId][field.name] &&
    queryData[sectionId][field.name][0]
  ) {
    transformedData[sectionId][field.name] = queryData[sectionId][field.name][0]
  }
  return transformedData
}

export const identifierToFieldTransformer = (identifierField: string) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  if (
    !queryData[sectionId] ||
    !queryData[sectionId].identifier ||
    !queryData[sectionId].identifier[0] ||
    !queryData[sectionId].identifier[0][identifierField]
  ) {
    return transformedData
  }
  transformedData[sectionId][field.name] =
    queryData[sectionId].identifier[0][identifierField]
  return transformedData
}

export const addressToFieldTransformer = (
  addressType: string,
  lineNumber: number = 0,
  transformedFieldName?: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  const address =
    queryData[sectionId] &&
    queryData[sectionId].address &&
    (queryData[sectionId].address as GQLAddress[]).find(
      addr => addr.type === addressType
    )

  if (!address) {
    return transformedData
  }
  if (lineNumber > 0) {
    transformedData[sectionId][field.name] =
      (address.line && address.line[lineNumber - 1]) || ''
  } else {
    transformedData[sectionId][field.name] =
      address[transformedFieldName ? transformedFieldName : field.name]
  }
  return transformedData
}

export const sameAddressFieldTransformer = (
  fromAddressType: string,
  fromSection: string,
  toAddressType: string,
  toSection: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  const fromAddress =
    queryData[fromSection] &&
    queryData[fromSection].address &&
    (queryData[fromSection].address as [GQLAddress]).find(
      addr => addr.type === fromAddressType
    )
  const toAddress =
    queryData[toSection] &&
    queryData[toSection].address &&
    (queryData[toSection].address as [GQLAddress]).find(
      addr => addr.type === toAddressType
    )
  if (!fromAddress || !toAddress) {
    transformedData[sectionId][field.name] = false
    return transformedData
  }

  transformedData[sectionId][field.name] =
    fromAddress.country === toAddress.country &&
    fromAddress.state === toAddress.state &&
    fromAddress.district === toAddress.district &&
    fromAddress.postalCode === toAddress.postalCode &&
    (fromAddress.line && fromAddress.line[0]) ===
      (toAddress.line && toAddress.line[0]) &&
    (fromAddress.line && fromAddress.line[1]) ===
      (toAddress.line && toAddress.line[1]) &&
    (fromAddress.line && fromAddress.line[2]) ===
      (toAddress.line && toAddress.line[2]) &&
    (fromAddress.line && fromAddress.line[3]) ===
      (toAddress.line && toAddress.line[3]) &&
    (fromAddress.line && fromAddress.line[4]) ===
      (toAddress.line && toAddress.line[4]) &&
    (fromAddress.line && fromAddress.line[5]) ===
      (toAddress.line && toAddress.line[5])

  return transformedData
}

export const sectionFieldExchangeTransformer = (
  fromSectionId: string,
  fromSectionField?: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  if (
    !queryData[fromSectionId] ||
    !queryData[fromSectionId][fromSectionField ? fromSectionField : field.name]
  ) {
    return transformedData
  }
  transformedData[sectionId][field.name] =
    queryData[fromSectionId][fromSectionField ? fromSectionField : field.name]
  return transformedData
}

export function commentToFieldTransformer(
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) {
  const comment =
    queryData[sectionId].status &&
    (queryData[sectionId].status as GQLRegWorkflow[])[0].comments &&
    ((queryData[sectionId].status as GQLRegWorkflow[])[0]
      .comments as GQLComment[])[0].comment
  if (comment) {
    transformedData[sectionId][field.name] = comment
  }
  return transformedData
}

export function attachmentToFieldTransformer(
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField,
  alternateSectionId?: string,
  subjectMapper?: any,
  typeMapper?: any
) {
  const selectedSectionId = alternateSectionId ? alternateSectionId : sectionId
  const attachments =
    queryData[selectedSectionId].attachments &&
    ((queryData[selectedSectionId].attachments as GQLAttachment[]).map(
      attachment => {
        let subject = attachment.subject
        if (subjectMapper) {
          // @ts-ignore
          subject =
            Object.keys(subjectMapper).find(
              key => subjectMapper[key] === attachment.subject
            ) || attachment.subject
        }
        let type = attachment.type
        if (typeMapper) {
          // @ts-ignore
          type =
            Object.keys(typeMapper).find(
              key => typeMapper[key] === attachment.type
            ) || attachment.type
        }
        return {
          data: attachment.data,
          type: attachment.contentType,
          optionValues: [subject, type],
          title: subject,
          description: type
        }
      }
    ) as IAttachment[])

  if (attachments) {
    transformedData[sectionId][field.name] = attachments
  }
  return transformedData
}