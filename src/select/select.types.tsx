export interface SelectExtraProps {
    label?: string;
    options?: {label: any, value: any}[];
    api?: {url: string, key: string, value: string, dataKey?: string};
    multi?: boolean;
    onSelectList?: any;
    onRemove?: any;
    selectedValues?: any;
}