import { Contract, ethers } from "ethers";
import { useCall, useCalls, useContractFunction } from "@usedapp/core";

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


// export function useCards(totalIndex) {
//   const calls = totalIndex?.map(contractAddress => ({
//     contract: new Contract(contractAddress, contractInterface),
//     method: 'cards',
//     args: []
//   })) ?? []
//   const results = useCalls(calls) ?? []
//   return results.map(result => result?.value?.[0])
// }

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

// export function useCheckExistedUser() {
//   const { state, send } = useContractFunction(contract, "checkExistedUser", {});
//   return { state, send };
// }

export function useNumberOfTypes() {
  const { value: numberOfTypes } = useCall({
    contract: contract,
    method: "numberOfTypes",
    args: [],
  }) ?? {};
  return numberOfTypes;
}

export function useShowPurchasedCards() {
  const { value: showPurchasedCards } = useCall({
    contract: contract,
    method: "showPurchasedCards",
    args: [],
  }) ?? {};
  return showPurchasedCards;
}

export function useShowRemainingDays() {
  const { value: showRemainingDays } = useCall({
    contract: contract,
    method: "showRemainingDays",
    args: [],
  }) ?? {};
  return showRemainingDays;
}

export function useContractMethod(methodName) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}