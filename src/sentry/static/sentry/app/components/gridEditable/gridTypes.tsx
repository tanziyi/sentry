/**
 * For GridEditable, there are 2 generic types for the component, T and K
 * - T is an element/object that represents the data to be displayed
 * - K is a key of T
 *   - columnKey should have the same set of values as K
 */

type ObjectKey = React.ReactText;

export type GridColumn<K = ObjectKey> = {
  key: K;
};

export type GridColumnHeader<K = ObjectKey> = GridColumn<K> & {
  name: string;
  isPrimary?: boolean;
};

export type GridColumnOrder<K = ObjectKey> = GridColumnHeader<K>;
export type GridColumnSortBy<K = ObjectKey> = GridColumn<K> & {
  order: -1 | 1;
};
