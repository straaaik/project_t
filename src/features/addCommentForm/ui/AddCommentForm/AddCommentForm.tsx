import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFromSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('translation');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onChangeCommentForm = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onChangeCommentForm('');
    }, [onChangeCommentForm, onSendComment, text]);

    return (
        <DynamicLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input onChange={onChangeCommentForm} value={text} className={cls.input} placeholder={t('Введите комментарий')} />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicLoader>
    );
});

export default AddCommentForm;
