/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { SearchBarFilter } from '../objects/filter';

import {
  GLOBAL_SEARCH_BAR_ADD_FILTER,
  GLOBAL_SEARCH_BAR_SUBMIT_BUTTON,
  ADD_FILTER_FORM_SAVE_BUTTON,
  ADD_FILTER_FORM_FIELD_INPUT,
  ADD_FILTER_FORM_OPERATOR_OPTION_IS,
  ADD_FILTER_FORM_OPERATOR_FIELD,
  ADD_FILTER_FORM_FILTER_VALUE_INPUT,
  GLOBAL_KQL_INPUT,
} from '../screens/search_bar';

export const openAddFilterPopover = () => {
  cy.get(GLOBAL_SEARCH_BAR_SUBMIT_BUTTON).should('be.enabled');
  cy.get(GLOBAL_SEARCH_BAR_ADD_FILTER).should('be.visible');
  cy.get(GLOBAL_SEARCH_BAR_ADD_FILTER).click();
};

export const openKqlQueryBar = () => {
  cy.get(GLOBAL_KQL_INPUT).should('be.visible');
  cy.get(GLOBAL_KQL_INPUT).click();
};

export const fillKqlQueryBar = (query: string) => {
  cy.get(GLOBAL_KQL_INPUT).should('be.visible');
  cy.get(GLOBAL_KQL_INPUT).type(query);
};

export const fillAddFilterForm = ({ key, value, operator }: SearchBarFilter) => {
  cy.get(ADD_FILTER_FORM_FIELD_INPUT).should('exist');
  cy.get(ADD_FILTER_FORM_FIELD_INPUT).should('be.visible');
  cy.get(ADD_FILTER_FORM_FIELD_INPUT).type(`${key}{downarrow}{enter}`);
  if (!operator) {
    cy.get(ADD_FILTER_FORM_OPERATOR_FIELD).click();
    cy.get(ADD_FILTER_FORM_OPERATOR_OPTION_IS).click();
  } else {
    cy.get(ADD_FILTER_FORM_OPERATOR_FIELD).type(`${operator}{enter}`);
  }
  if (value) {
    cy.get(ADD_FILTER_FORM_FILTER_VALUE_INPUT).type(value);
  }
  cy.get(ADD_FILTER_FORM_SAVE_BUTTON).click();
  cy.get(ADD_FILTER_FORM_SAVE_BUTTON).should('not.exist');
};
