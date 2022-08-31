import { Contract, ethers } from "ethers";
import { useCall, useContractFunction } from "@usedapp/core";

import contractAbi from "../artifacts/contractAbi.json";
import { contractAddress } from ".."

const contractInterface = new ethers.utils.Interface(contractAbi);
const contract = new Contract(contractAddress, contractInterface);


export function useCards(index) {
  const { value: cards } = useCall({
    contract: contract,
    method: "cards",
    args: [index],
  }) ?? {};
  return cards;
}

export function useCheckPurchase(address, index) {
  const { value: checkPurchase } = useCall({
    contract: contract,
    method: "checkPurchase",
    args: [address, index],
  }) ?? {};
  return checkPurchase;
}

export function useShowPurchaseDate(address, index) {
  const { value: showPurchaseDate } = useCall({
    contract: contract,
    method: "showPurchaseDate",
    args: [address, index],
  }) ?? {};
  return showPurchaseDate;
}

export function useTypes() {
  const { value: types } = useCall({
    contract: contract,
    method: "types",
    args: [],
  }) ?? {};
  return types;
}

export function useAddCard() {
  const { state, send } = useContractFunction(contract, "addCard", {});
  return { state, send };
}

export function usePurchaseCard() {
  const { state, send } = useContractFunction(contract, "purchaseCard", {});
  return { state, send };
}

export function useRemoveCard() {
  const { state, send } = useContractFunction(contract, "removeCard", {});
  return { state, send };
}

export function useContractMethod(methodName) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}