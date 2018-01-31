import { IGameSet, ICollectionSet, IUserSet } from "./index";

export interface ITabDataSet {
  [key: string]: ITabData;
}

interface ITabUsers {
  /** users in relation to this tab */
  set: IUserSet;
}

export interface ITabGames {
  /** games in relation to this tab (single game, games in a collection) */
  set: IGameSet;
  ids: number[];
  allIds?: number[];
  totalCount?: number;
}

export interface ITabCollections {
  /** games in relation to this tab (single game, games in a collection) */
  set: ICollectionSet;
  ids: number[];
}

export interface ITabLocation {
  path: string;
}

export interface ITabWeb {
  /** numeric identifier of the electron web contents */
  webContentsId?: number;

  title?: string;
  favicon?: string;
  url?: string;
  canGoBack?: boolean;
  canGoForward?: boolean;
  editingAddress?: boolean;
  loading?: boolean;
}

export interface ITabToast {
  /** error to show for toast tab */
  error?: string;

  /** stack trace to show for toast tab */
  stack?: string;
}

export interface ITabLog {
  log: string;
}

export interface ITabData {
  /** path of tab, something like `collections/:id`, etc. */
  path?: string;

  /** true if the tab has never been fetched in that session before */
  fresh?: boolean;

  users?: ITabUsers;
  games?: ITabGames;
  collections?: ITabCollections;
  web?: ITabWeb;
  toast?: ITabToast;
  location?: ITabLocation;
  log?: ITabLog;
}

export interface ITabDataSave extends ITabData {
  id: string;
}
