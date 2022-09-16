import Web3EthContract from 'web3-eth-contract';
import Web3 from "web3";

import { fetchData } from '../data/dataActions';

const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    }
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
        payload: payload,
    }
};

const connectFailed = (payload) => {
    return {
        type: "CONNECTION_FAILED",
        payload: payload
    };
}

const updateAccountRequest = (payload) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload: payload,
    };
}

export const connect = () => {
    return async (dispatch) => {
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        const abi = await abiResponse.json();
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const CONFIG = await configResponse.json();
        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    }
}