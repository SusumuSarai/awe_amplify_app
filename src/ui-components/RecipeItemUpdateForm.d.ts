/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RecipeItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipeItemUpdateFormInputValues = {
    recipeItem?: string;
    quantity?: number;
    corner?: string;
    unit?: string;
};
export declare type RecipeItemUpdateFormValidationValues = {
    recipeItem?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    corner?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeItemUpdateFormOverridesProps = {
    RecipeItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipeItem?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    corner?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipeItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipeItem?: RecipeItem;
    onSubmit?: (fields: RecipeItemUpdateFormInputValues) => RecipeItemUpdateFormInputValues;
    onSuccess?: (fields: RecipeItemUpdateFormInputValues) => void;
    onError?: (fields: RecipeItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeItemUpdateFormInputValues) => RecipeItemUpdateFormInputValues;
    onValidate?: RecipeItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeItemUpdateForm(props: RecipeItemUpdateFormProps): React.ReactElement;
