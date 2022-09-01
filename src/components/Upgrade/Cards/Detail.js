import { Transition, Dialog } from "@headlessui/react"

import Card from "../../../containers/Wallet/Card";

function Detail(props) {
	return (
		<Transition appear show={props.modal}>
			<Dialog onClose={props.handleModal}>
				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="rounded-lg shadow-lg w-auto my-6 mx-auto max-w-3xl justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
						<div className="flex-col w-full bg-slate-900">
							<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
								<h3 className="text-3xl font-semibold text-white">Card's detail</h3>
							</div>

							<div className="relative p-5 flex-auto">

								<div className="flex justify-around justify-items-center items-center p-5">
									<div>
										<Card id={props.id} />
									</div>
									<div>
										<table class="item min-w-full text-center">
											<tr class="border-b">
												<td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
													Name
												</td>
												<td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
													{props.card?.name}
												</td>

											</tr>
											<tr class="border-b">
												<td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
													Price
												</td>
												<td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
													{parseInt(props.card?.price)} ETH
												</td>

											</tr>
											<tr class="border-b">
												<td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
													Life span
												</td>
												<td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
													{props.card?.lifeSpan != 0 ? Math.floor((parseInt(props.card?.lifeSpan) / 86400)) + " day(s)" : "Unlimited"}
												</td>

											</tr>
											<tr class="">
												<td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
													Type
												</td>
												<td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
													Discount card
												</td>
											</tr>
										</table>
									</div>
								</div>

								<div>

								</div>

							</div>
							<div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
								<button
									className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={props.handleModal}
								>
									OK!
								</button>
							</div>
						</div>
					</div>

				</Transition.Child>
			</Dialog>
		</Transition>
	)
}

export default Detail;