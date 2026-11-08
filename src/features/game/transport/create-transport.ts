import { LocalTransport } from './local-transport'
import { PeerTransport } from './peer-transport'
import type { GameTransport } from './types'

/** `peer` : internet (PeerJS) ; `local` : onglets d'un même navigateur (tests, repli). */
export type TransportKind = 'peer' | 'local'

export function createTransport(kind: TransportKind): GameTransport {
  return kind === 'local' ? new LocalTransport() : new PeerTransport()
}
