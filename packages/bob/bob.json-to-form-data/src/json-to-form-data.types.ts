type PayloadPart = Record<string, File | boolean | string | number | null>

type FormDataEntry = File | PayloadPart | boolean | string | number | null

export { PayloadPart, FormDataEntry }
