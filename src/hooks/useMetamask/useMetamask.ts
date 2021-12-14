import { useRecoilState} from 'recoil';
import {ethers, providers} from 'ethers';
import {isMetamaskConnectedTypeGuard, metamaskState} from "./types";

// ethereum isn't on TS standard Window type:
declare const window: Window & {
    ethereum: providers.ExternalProvider;
}

/**
 * A hook to provide Metamask's 'connect' function anywhere, and give global access to the
 * returned values (user's account, provider, signer).
 * - As this uses recoil state, consumers only concerned about the raw state values (and not connect) can simply use
 *   useRecoilValue(metamaskState) instead of this hook
 */
export const useMetamask = () => {
    const [state, setState] = useRecoilState(metamaskState);

    const connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        await provider.send('eth_requestAccounts', []);

        provider.on('network', (_, oldNetwork) => {
            oldNetwork && window.location.reload(); // might want to change this to render UI
        });

        const signer = provider.getSigner();
        const account = await signer.getAddress();
        setState(() => ({provider, signer, account}));
    };

    return {
        ...state,
        connect,
        isConnected: isMetamaskConnectedTypeGuard(state) // CAUTION: isConnected is not a type-guard
    };
};



