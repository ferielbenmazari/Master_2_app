/** Message échangé entre appareils : objet JSON avec un type `t` (l'union complète arrive en T17). */
export type WireMessage = { readonly t: string; readonly [key: string]: unknown }

/** Un pair connecté. Étoile : l'hôte voit tous les invités, un invité ne voit que l'hôte. */
export type PeerInfo = { readonly id: string; readonly isHost: boolean }

export type TransportErrorKind =
  | 'invalid-code' // code mal formé
  | 'offline' // pas de réseau
  | 'signaling' // serveur de signalisation injoignable
  | 'room-not-found' // aucun hôte avec ce code
  | 'code-taken' // un hôte utilise déjà ce code
  | 'timeout' // pas de réponse à temps
  | 'unsupported' // navigateur sans WebRTC / BroadcastChannel
  | 'unknown'

export class TransportError extends Error {
  readonly kind: TransportErrorKind
  constructor(kind: TransportErrorKind, detail?: string) {
    super(detail ? `${kind}: ${detail}` : kind)
    this.name = 'TransportError'
    this.kind = kind
  }
}

/**
 * Transport du jeu multijoueur. Le jeu ne connaît que cette interface : PeerJS (internet) ou
 * local (même appareil) sont interchangeables.
 */
export interface GameTransport {
  /** Identifiant de cet appareil (vide tant qu'on n'est pas connecté). */
  readonly selfId: string
  /** Devient hôte de la salle `code`. Rejette avec une `TransportError`. */
  host(code: string): Promise<void>
  /** Rejoint la salle `code`. Rejette avec une `TransportError`. */
  join(code: string): Promise<void>
  /** Envoie à un pair (`id`) ou à tous (`'all'`). Un invité n'écrit qu'à l'hôte. */
  send(to: string, msg: WireMessage): void
  /** Écoute les messages reçus. Renvoie la fonction de désabonnement. */
  onMessage(cb: (from: string, msg: WireMessage) => void): () => void
  /** Écoute les changements de liste de pairs. Renvoie la fonction de désabonnement. */
  onPeers(cb: (peers: readonly PeerInfo[]) => void): () => void
  /** Ferme toutes les connexions et libère les ressources (idempotent). */
  close(): void
}

export const ALL = 'all'
