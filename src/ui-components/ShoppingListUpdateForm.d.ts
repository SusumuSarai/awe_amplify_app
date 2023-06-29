/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ShoppingList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoppingListUpdateFormInputValues = {
    item?: string;
    unit?: string;
    quantity?: number;
    corner?: string;
};
export declare type ShoppingListUpdateFormValidationValues = {
    item?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    corner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListUpdateFormOverridesProps = {
    ShoppingListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    item?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shoppingList?: ShoppingList;
    onSubmit?: (fields: ShoppingListUpdateFormInputValues) => ShoppingListUpdateFormInputValues;
    onSuccess?: (fields: ShoppingListUpdateFormInputValues) => void;
    onError?: (fields: ShoppingListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListUpdateFormInputValues) => ShoppingListUpdateFormInputValues;
    onValidate?: ShoppingListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListUpdateForm(props: ShoppingListUpdateFormProps): React.ReactElement;
