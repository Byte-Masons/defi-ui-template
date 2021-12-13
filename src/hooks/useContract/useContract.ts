import { useEffect, useState } from "react";
import {ContractInterface, ethers} from "ethers";
import {useRecoilValue} from "recoil";
import {isMetamaskConnectedTypeGuard, metamaskState} from "../useMetamask/types";

/**
 * A hook to engage with any contract (can be used outright, or as the base to compose other contract-specific hooks)
 * - returned value will be undefined until the user connects their wallet via metamask
 * @param address the blockchain address of the contract
 * @param abi the contract abi (can be partial)
 *
 */
export const useContract = (address: string, abi: ContractInterface) => {
    const [contract, setContract] = useState<ethers.Contract | undefined>(
        undefined
    );

    const metamaskState = useRecoilValue(metamaskState)

    useEffect(() => {
        if (isMetamaskConnectedTypeGuard(metamaskState)) {
            const {provider, signer} = metamaskState;
            const c = new ethers.Contract(address, abi, provider);
            const contractWithSigner = c.connect(signer!);
            setContract(contractWithSigner);
        }
    }, [metamaskState]);

    return contract
};
