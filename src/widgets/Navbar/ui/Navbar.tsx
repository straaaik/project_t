import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation('translation');
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                nnjnjnjnj
            </Modal>
        </div>
    );
}
