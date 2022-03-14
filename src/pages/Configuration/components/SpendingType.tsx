import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const SpendingType: React.FC<{
    onAdd?: () => void;
    data: [];
}> = ({ onAdd, data }) => {
    const [showInput, setShowInput] = React.useState(false);
    const renderFooter = () => {
        return (
            <div>
                <Button
                    label="Huỷ"
                    icon="pi pi-times"
                    onClick={() => setShowInput(false)}
                    className="p-button-text"
                />
                <Button label="Thêm" icon="pi pi-check" onClick={onAdd} />
            </div>
        );
    };
    return (
        <React.Fragment>
            <Fieldset legend="Loại chi tiêu">
                <div className="flex justify-end mb-3">
                    <Button
                        icon="pi pi-plus"
                        label="Thêm"
                        onClick={() => setShowInput(true)}
                    />
                </div>
                <DataTable
                    value={data}
                    showGridlines
                    rowHover
                    responsiveLayout="scroll"
                >
                    <Column field="id" header="#"></Column>
                    <Column field="name" header="Tên"></Column>
                    <Column></Column>
                </DataTable>
            </Fieldset>
            <Dialog
                header="Thêm loại chi tiêu"
                visible={showInput}
                className="w-4/5 md:w-2/3 lg:w-1/2"
                footer={renderFooter()}
                draggable={false}
                onHide={() => setShowInput(false)}
            >
                <form className="flex flex-col mr-2">
                    <label htmlFor="name" className="mb-3">
                        Tên loại chi tiêu
                    </label>
                    <InputText
                        id="name"
                        name="name"
                        placeholder="Nhập tên loại chi tiêu"
                        autoFocus
                    />
                </form>
            </Dialog>
        </React.Fragment>
    );
};

export default SpendingType;
