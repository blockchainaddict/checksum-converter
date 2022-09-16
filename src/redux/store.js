import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import blockchainReducer from "./blockchain/blockchainReducer";