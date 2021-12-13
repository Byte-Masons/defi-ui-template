import {atom} from 'recoil';
import {ethers} from 'ethers';
import {AllMandatory} from "../../utilities/types";

export type MetamaskState = {
    provider?: ethers.providers.Web3Provider;
    signer?: ethers.providers.JsonRpcSigner;
    account?: string;
};

type MetamaskIsConnected = AllMandatory<MetamaskState>; // the state when user is connected

/**
 * A Typeguard to allow using state properties without optional-chaining or multiple if/else
 * @param state the whole state object from metamaskState
 */
export const isMetamaskConnectedTypeGuard = (state: MetamaskState | MetamaskIsConnected): state is MetamaskIsConnected =>
    !!state.provider && !!state.signer && !!state.account

export const metamaskState = atom<MetamaskState | MetamaskIsConnected>({
    key: 'metamaskState',
    dangerouslyAllowMutability: true,
    default: {
        provider: undefined,
        signer: undefined,
        account: undefined,
    },
});
