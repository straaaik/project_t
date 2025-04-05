import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userActions } from 'entitis/User';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation('translation');
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
                <LoginModal isOpen={isOpen} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
                {t('Войти')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </div>
    );
}
