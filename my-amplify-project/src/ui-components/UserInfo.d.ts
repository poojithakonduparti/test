/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserInfoInputValues = {
    firstName?: string;
    lastName?: string;
    Field3?: string;
    position?: string;
    shirtNumber?: string;
    Field1?: string;
    Field0?: string;
    Field2?: string;
};
export declare type UserInfoValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    shirtNumber?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoOverridesProps = {
    UserInfoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    shirtNumber?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoProps = React.PropsWithChildren<{
    overrides?: UserInfoOverridesProps | undefined | null;
} & {
    onSubmit: (fields: UserInfoInputValues) => void;
    onChange?: (fields: UserInfoInputValues) => UserInfoInputValues;
    onValidate?: UserInfoValidationValues;
} & React.CSSProperties>;
export default function UserInfo(props: UserInfoProps): React.ReactElement;
