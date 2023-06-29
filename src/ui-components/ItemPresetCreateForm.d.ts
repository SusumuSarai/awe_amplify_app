/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemPresetCreateFormInputValues = {
    item?: string;
    unit?: string;
    corner?: string;
};
export declare type ItemPresetCreateFormValidationValues = {
    item?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
    corner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemPresetCreateFormOverridesProps = {
    ItemPresetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemPresetCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemPresetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemPresetCreateFormInputValues) => ItemPresetCreateFormInputValues;
    onSuccess?: (fields: ItemPresetCreateFormInputValues) => void;
    onError?: (fields: ItemPresetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemPresetCreateFormInputValues) => ItemPresetCreateFormInputValues;
    onValidate?: ItemPresetCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemPresetCreateForm(props: ItemPresetCreateFormProps): React.ReactElement;
