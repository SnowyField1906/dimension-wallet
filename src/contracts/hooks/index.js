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

export function useUsers(address) {
  const { value: users } = useCall({
    contract: contract,
    method: "users",
    args: [address],
  }) ?? {};
  return users;
}

export function useCheckExistedUser(address) {
  const { value: checkExistedUser } = useCall({
    contract: contract,
    method: "checkExistedUser",
    args: [address],
  }) ?? {};
  return checkExistedUser;
}

export function useNumberOfTypes() {
  const { value: numberOfTypes } = useCall({
    contract: contract,
    method: "numberOfTypes",
    args: [],
  }) ?? {};
  return numberOfTypes;
}

export function useCheckPurchase(index) {
  const { value: checkPurchase } = useCall({
    contract: contract,
    method: "checkPurchase",
    args: [index],
  }) ?? {};
  return checkPurchase;
}

export function useShowRemainingTime(index) {
  const { value: showRemainingTime } = useCall({
    contract: contract,
    method: "showRemainingTime",
    args: [index],
  }) ?? {};
  return showRemainingTime;
}


export function useAddCard() {
  const { state, send } = useContractFunction(contract, "addCard", {});
  return { state, send };
}

export function useExpriedCard() {
  const { state, send } = useContractFunction(contract, "expriedCard", {});
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