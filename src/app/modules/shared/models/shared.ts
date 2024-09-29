export enum ConfirmationMode {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    UPLOAD = 'UPLOAD'
}
export interface EmptyOptionsMode {
    noDataFoundMessage: string,
    moreAction: boolean,
    addActionMessage: string | null,
    addButtonText: string | null,
    showShadow: boolean,
}

export interface Alert {
    code: AlertType,
    message: string,
    isDismissable: boolean
}

export enum AlertType {
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    INFO = 'INFO',
}