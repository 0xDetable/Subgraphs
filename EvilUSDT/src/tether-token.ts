import {
  Issue as IssueEvent,
  Redeem as RedeemEvent,
  DestroyedBlackFunds as DestroyedBlackFundsEvent,
  AddedBlackList as AddedBlackListEvent,
  RemovedBlackList as RemovedBlackListEvent,
  Transfer as TransferEvent,
} from "../generated/TetherToken/TetherToken"
import {
  Issue,
  Redeem,
  DestroyedBlackFund,
  AddedBlackList,
  RemovedBlackList,
  Transfer,
} from "../generated/schema"

export function handleIssue(event: IssueEvent): void {
  let entity = new Issue(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDestroyedBlackFunds(
  event: DestroyedBlackFundsEvent
): void {
  let entity = new DestroyedBlackFund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._blackListedUser = event.params._blackListedUser
  entity._balance = event.params._balance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddedBlackList(event: AddedBlackListEvent): void {
  let entity = new AddedBlackList(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedBlackList(event: RemovedBlackListEvent): void {
  let entity = new RemovedBlackList(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
