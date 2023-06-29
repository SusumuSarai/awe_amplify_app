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
export declare type ShoppingListCreateFormInputValues = {
    item?: string;
    unit?: string;
    quantity?: number;
    corner?: string;
};
export declare type ShoppingListCreateFormValidationValues = {
    item?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    corner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListCreateFormOverridesProps = {
    ShoppingListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoppingListCreateFormInputValues) => ShoppingListCreateFormInputValues;
    onSuccess?: (fields: ShoppingListCreateFormInputValues) => void;
    onError?: (fields: ShoppingListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListCreateFormInputValues) => ShoppingListCreateFormInputValues;
    onValidate?: ShoppingListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListCreateForm(props: ShoppingListCreateFormProps): React.ReactElement;
