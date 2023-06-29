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
export declare type ShopCreateFormInputValues = {
    shop?: string;
    corner?: string[];
};
export declare type ShopCreateFormValidationValues = {
    shop?: ValidationFunction<string>;
    corner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopCreateFormOverridesProps = {
    ShopCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shop?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopCreateFormProps = React.PropsWithChildren<{
    overrides?: ShopCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShopCreateFormInputValues) => ShopCreateFormInputValues;
    onSuccess?: (fields: ShopCreateFormInputValues) => void;
    onError?: (fields: ShopCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShopCreateFormInputValues) => ShopCreateFormInputValues;
    onValidate?: ShopCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShopCreateForm(props: ShopCreateFormProps): React.ReactElement;
