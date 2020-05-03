import React from "react";
import {
  UsePaginationInstanceProps,
  UsePaginationState
} from "react-table";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { FieldSelect } from "../FieldSelect";
import Pagination from "../../Pagination";

export type TableToolbarProps<D extends object> = UsePaginationInstanceProps<D> & UsePaginationState<D> & {
  pageNumbersShownEach?: number,
  optionsRowsPerPage?: number[],
  rowsPerPageDefault?: number,
  entriesPerPageControlId: string,
  goToPageControlId: string
};

export const TableToolbar = <D extends object>({
  canNextPage,
  canPreviousPage,
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
  pageSize,
  pageIndex,
  setPageSize,
  pageNumbersShownEach = 2,
  optionsRowsPerPage = [10, 20, 50, 100],
  entriesPerPageControlId,
  goToPageControlId
} : TableToolbarProps<D>) => {
  const { t } = useTranslation();
  return (
    <Form.Row>
      <Col>
        <Form.Group controlId={entriesPerPageControlId}>
          <Form.Label>{`${t("Entries per page")}`}</Form.Label>
          <FieldSelect
            multiple={false}
            defaultValue={{
              label: pageSize.toString(),
              value: pageSize.toString()
            }}
            onChange={(selection) => {
              const value = selection && (selection as any).value || pageSize;
              setPageSize(Number(value));
            }}
            options={optionsRowsPerPage.map((number) => ({
              label: number.toString(),
              value: number.toString()
            }))}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId={goToPageControlId}>
          <Form.Label>{`${t("Go to page")}`}</Form.Label>
          <Form.Control
            type="number"
            defaultValue={pageIndex + 1}
            onChange={({ target }) => {
              const { value } = target;
              const page = Math.min(Math.max(Number(value) - 1, 0), pageCount - 1);
              gotoPage(page);
            }}
          />
        </Form.Group>
      </Col>
      <Col>
        <Pagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageNumbersShownEach={pageNumbersShownEach}
        />
      </Col>
    </Form.Row>
  );
};

export default TableToolbar;
