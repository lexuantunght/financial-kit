import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Chip } from 'primereact/chip';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';
import { useHistory } from 'react-router-dom';

const HeaderBar: React.FC = () => {
    const history = useHistory();
    const userData = useSelector((state: RootState) => state.app.userData);

    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-th-large',
        },
        {
            label: 'Management',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Post',
                    icon: 'pi pi-fw pi-pencil',
                    command: () => history.push('/post'),
                },
                {
                    label: 'Subscribe',
                    icon: 'pi pi-fw pi-envelope',
                    command: () => history.push('/subscribe'),
                },
                {
                    label: 'Configuration',
                    icon: 'pi pi-fw pi-cog',
                    command: () => history.push('/configuration'),
                },
            ],
        },
        {
            label: 'Log out',
            icon: 'pi pi-sign-out',
        },
    ];

    return (
        <div>
            <Menubar
                model={items}
                end={
                    <Chip
                        label={userData?.name}
                        image={userData?.avatar?.url}
                    />
                }
            />
        </div>
    );
};

export default React.memo(HeaderBar);
