/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RecipeItem } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RecipeItemUpdateForm(props) {
  const {
    id: idProp,
    recipeItem: recipeItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recipeItem: "",
    quantity: "",
    corner: "",
    unit: "",
  };
  const [recipeItem, setRecipeItem] = React.useState(initialValues.recipeItem);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [corner, setCorner] = React.useState(initialValues.corner);
  const [unit, setUnit] = React.useState(initialValues.unit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recipeItemRecord
      ? { ...initialValues, ...recipeItemRecord }
      : initialValues;
    setRecipeItem(cleanValues.recipeItem);
    setQuantity(cleanValues.quantity);
    setCorner(cleanValues.corner);
    setUnit(cleanValues.unit);
    setErrors({});
  };
  const [recipeItemRecord, setRecipeItemRecord] =
    React.useState(recipeItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(RecipeItem, idProp)
        : recipeItemModelProp;
      setRecipeItemRecord(record);
    };
    queryData();
  }, [idProp, recipeItemModelProp]);
  React.useEffect(resetStateValues, [recipeItemRecord]);
  const validations = {
    recipeItem: [{ type: "Required" }],
    quantity: [],
    corner: [],
    unit: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          recipeItem,
          quantity,
          corner,
          unit,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            RecipeItem.copyOf(recipeItemRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecipeItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Recipe item"
        isRequired={true}
        isReadOnly={false}
        value={recipeItem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeItem: value,
              quantity,
              corner,
              unit,
            };
            const result = onChange(modelFields);
            value = result?.recipeItem ?? value;
          }
          if (errors.recipeItem?.hasError) {
            runValidationTasks("recipeItem", value);
          }
          setRecipeItem(value);
        }}
        onBlur={() => runValidationTasks("recipeItem", recipeItem)}
        errorMessage={errors.recipeItem?.errorMessage}
        hasError={errors.recipeItem?.hasError}
        {...getOverrideProps(overrides, "recipeItem")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              recipeItem,
              quantity: value,
              corner,
              unit,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Corner"
        isRequired={false}
        isReadOnly={false}
        value={corner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeItem,
              quantity,
              corner: value,
              unit,
            };
            const result = onChange(modelFields);
            value = result?.corner ?? value;
          }
          if (errors.corner?.hasError) {
            runValidationTasks("corner", value);
          }
          setCorner(value);
        }}
        onBlur={() => runValidationTasks("corner", corner)}
        errorMessage={errors.corner?.errorMessage}
        hasError={errors.corner?.hasError}
        {...getOverrideProps(overrides, "corner")}
      ></TextField>
      <TextField
        label="Unit"
        isRequired={false}
        isReadOnly={false}
        value={unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeItem,
              quantity,
              corner,
              unit: value,
            };
            const result = onChange(modelFields);
            value = result?.unit ?? value;
          }
          if (errors.unit?.hasError) {
            runValidationTasks("unit", value);
          }
          setUnit(value);
        }}
        onBlur={() => runValidationTasks("unit", unit)}
        errorMessage={errors.unit?.errorMessage}
        hasError={errors.unit?.hasError}
        {...getOverrideProps(overrides, "unit")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || recipeItemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || recipeItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
