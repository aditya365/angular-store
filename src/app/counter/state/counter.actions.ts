import { createAction, props } from "@ngrx/store";

export const increment = createAction('INCREMENT');
export const decrement = createAction('iDECREMENT');
export const reset = createAction('RESET');

export const customIncrement = createAction('CUSTOM_INCREMENT', props<{
    incrementValue: number
}>());
