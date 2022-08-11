import { Contract, ethers } from "ethers";
import { useCall, useContractFunction } from "@usedapp/core";

import contractAbi from "../artifacts/contractAbi.json";
import { contractAddress } from ".."

const contractInterface = new ethers.utils.Interface(contractAbi);
const contract = new Contract(contractAddress, contractInterface);

export function useCount() {
  const { value: count } = useCall({
    contract: new Contract(contractAddress, contractInterface),
    method: "count",
    args: [],
  }) ?? {};
  return count;
}

export function useIncrement() {
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  return { state, send };
}

export function useSetCount() {
  const { state, send } = useContractFunction(contract, "setCount", {});
  return { state, send };
}

export function useContractMethod(methodName) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}