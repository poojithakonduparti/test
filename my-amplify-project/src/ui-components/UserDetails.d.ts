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
export declare type UserDetailsInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    dob?: string;
    job_title?: string;
    department_name?: string;
    department_id?: string;
};
export declare type UserDetailsValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    job_title?: ValidationFunction<string>;
    department_name?: ValidationFunction<string>;
    department_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDetailsOverridesProps = {
    UserDetailsGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    job_title?: PrimitiveOverrideProps<TextFieldProps>;
    department_name?: PrimitiveOverrideProps<TextFieldProps>;
    department_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDetailsProps = React.PropsWithChildren<{
    overrides?: UserDetailsOverridesProps | undefined | null;
} & {
    onSubmit: (fields: UserDetailsInputValues) => void;
    onChange?: (fields: UserDetailsInputValues) => UserDetailsInputValues;
    onValidate?: UserDetailsValidationValues;
} & React.CSSProperties>;
export default function UserDetails(props: UserDetailsProps): React.ReactElement;
