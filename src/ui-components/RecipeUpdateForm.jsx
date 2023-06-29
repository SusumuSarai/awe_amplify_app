/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Recipe } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RecipeUpdateForm(props) {
  const {
    id: idProp,
    recipe: recipeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recipeTitle: "",
    memo: "",
    url: "",
    serving: "",
    category1: "",
    category2: "",
    like: "",
  };
  const [recipeTitle, setRecipeTitle] = React.useState(
    initialValues.recipeTitle
  );
  const [memo, setMemo] = React.useState(initialValues.memo);
  const [url, setUrl] = React.useState(initialValues.url);
  const [serving, setServing] = React.useState(initialValues.serving);
  const [category1, setCategory1] = React.useState(initialValues.category1);
  const [category2, setCategory2] = React.useState(initialValues.category2);
  const [like, setLike] = React.useState(initialValues.like);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recipeRecord
      ? { ...initialValues, ...recipeRecord }
      : initialValues;
    setRecipeTitle(cleanValues.recipeTitle);
    setMemo(cleanValues.memo);
    setUrl(cleanValues.url);
    setServing(cleanValues.serving);
    setCategory1(cleanValues.category1);
    setCategory2(cleanValues.category2);
    setLike(cleanValues.like);
    setErrors({});
  };
  const [recipeRecord, setRecipeRecord] = React.useState(recipeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Recipe, idProp)
        : recipeModelProp;
      setRecipeRecord(record);
    };
    queryData();
  }, [idProp, recipeModelProp]);
  React.useEffect(resetStateValues, [recipeRecord]);
  const validations = {
    recipeTitle: [{ type: "Required" }],
    memo: [],
    url: [{ type: "URL" }],
    serving: [],
    category1: [],
    category2: [],
    like: [],
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
          recipeTitle,
          memo,
          url,
          serving,
          category1,
          category2,
          like,
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
            Recipe.copyOf(recipeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RecipeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Recipe title"
        isRequired={true}
        isReadOnly={false}
        value={recipeTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeTitle: value,
              memo,
              url,
              serving,
              category1,
              category2,
              like,
            };
            const result = onChange(modelFields);
            value = result?.recipeTitle ?? value;
          }
          if (errors.recipeTitle?.hasError) {
            runValidationTasks("recipeTitle", value);
          }
          setRecipeTitle(value);
        }}
        onBlur={() => runValidationTasks("recipeTitle", recipeTitle)}
        errorMessage={errors.recipeTitle?.errorMessage}
        hasError={errors.recipeTitle?.hasError}
        {...getOverrideProps(overrides, "recipeTitle")}
      ></TextField>
      <TextField
        label="Memo"
        isRequired={false}
        isReadOnly={false}
        value={memo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo: value,
              url,
              serving,
              category1,
              category2,
              like,
            };
            const result = onChange(modelFields);
            value = result?.memo ?? value;
          }
          if (errors.memo?.hasError) {
            runValidationTasks("memo", value);
          }
          setMemo(value);
        }}
        onBlur={() => runValidationTasks("memo", memo)}
        errorMessage={errors.memo?.errorMessage}
        hasError={errors.memo?.hasError}
        {...getOverrideProps(overrides, "memo")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo,
              url: value,
              serving,
              category1,
              category2,
              like,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Serving"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={serving}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo,
              url,
              serving: value,
              category1,
              category2,
              like,
            };
            const result = onChange(modelFields);
            value = result?.serving ?? value;
          }
          if (errors.serving?.hasError) {
            runValidationTasks("serving", value);
          }
          setServing(value);
        }}
        onBlur={() => runValidationTasks("serving", serving)}
        errorMessage={errors.serving?.errorMessage}
        hasError={errors.serving?.hasError}
        {...getOverrideProps(overrides, "serving")}
      ></TextField>
      <TextField
        label="Category1"
        isRequired={false}
        isReadOnly={false}
        value={category1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo,
              url,
              serving,
              category1: value,
              category2,
              like,
            };
            const result = onChange(modelFields);
            value = result?.category1 ?? value;
          }
          if (errors.category1?.hasError) {
            runValidationTasks("category1", value);
          }
          setCategory1(value);
        }}
        onBlur={() => runValidationTasks("category1", category1)}
        errorMessage={errors.category1?.errorMessage}
        hasError={errors.category1?.hasError}
        {...getOverrideProps(overrides, "category1")}
      ></TextField>
      <TextField
        label="Category2"
        isRequired={false}
        isReadOnly={false}
        value={category2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo,
              url,
              serving,
              category1,
              category2: value,
              like,
            };
            const result = onChange(modelFields);
            value = result?.category2 ?? value;
          }
          if (errors.category2?.hasError) {
            runValidationTasks("category2", value);
          }
          setCategory2(value);
        }}
        onBlur={() => runValidationTasks("category2", category2)}
        errorMessage={errors.category2?.errorMessage}
        hasError={errors.category2?.hasError}
        {...getOverrideProps(overrides, "category2")}
      ></TextField>
      <TextField
        label="Like"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={like}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              recipeTitle,
              memo,
              url,
              serving,
              category1,
              category2,
              like: value,
            };
            const result = onChange(modelFields);
            value = result?.like ?? value;
          }
          if (errors.like?.hasError) {
            runValidationTasks("like", value);
          }
          setLike(value);
        }}
        onBlur={() => runValidationTasks("like", like)}
        errorMessage={errors.like?.errorMessage}
        hasError={errors.like?.hasError}
        {...getOverrideProps(overrides, "like")}
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
          isDisabled={!(idProp || recipeModelProp)}
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
              !(idProp || recipeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
