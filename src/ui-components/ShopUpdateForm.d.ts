/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Shop } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShopUpdateFormInputValues = {
    shop?: string;
    corner?: string[];
};
export declare type ShopUpdateFormValidationValues = {
    shop?: ValidationFunction<string>;
    corner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopUpdateFormOverridesProps = {
    ShopUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shop?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShopUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShopUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shop?: Shop;
    onSubmit?: (fields: ShopUpdateFormInputValues) => ShopUpdateFormInputValues;
    onSuccess?: (fields: ShopUpdateFormInputValues) => void;
    onError?: (fields: ShopUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShopUpdateFormInputValues) => ShopUpdateFormInputValues;
    onValidate?: ShopUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShopUpdateForm(props: ShopUpdateFormProps): React.ReactElement;
