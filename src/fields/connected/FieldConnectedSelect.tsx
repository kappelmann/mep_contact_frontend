import React, {
  useContext,
  useEffect,
  useState
} from "react";
import Alert from "react-bootstrap/Alert";

import FieldSelect, {
  ConnectedFieldSelectWithLabelProps,
  FieldSelectOptionsType
} from "../FieldSelect";
import ContextDatabase from "../../contexts/ContextDatabase";
import { execStatement } from "../../database";

export type FieldConnectedSelectProps = Exclude<ConnectedFieldSelectWithLabelProps, "options"> & {
  sql: string
};

// Retrieves the options from the database with the given query.
// Chooses the first column of the returned result set.
export const FieldConnectedSelect = ({
  sql,
  ...rest
} : FieldConnectedSelectProps) => {
  const database = useContext(ContextDatabase);
  const [options, setOptions] = useState<FieldSelectOptionsType>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    execStatement({ database, sql })
    .then(({ values }) => {
      const options = values.map((entry) => ({
        label: entry[0] as string,
        value: entry[0] as string
      }));
      setOptions(options);
    })
    .catch(setError);
  }, [database]);

  return (
    <>
      {error && <Alert variant={"danger"}>{error.toString()}</Alert>}
      <FieldSelect
        options={options}
        {...rest}
      />
    </>
  );
};

export default FieldConnectedSelect;