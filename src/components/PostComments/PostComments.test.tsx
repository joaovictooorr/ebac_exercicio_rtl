import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);
        
        const textAreaElement = screen.getByTestId('txt-comment')
        const buttonElement = screen.getByTestId('btn-submit')

        fireEvent.change(textAreaElement,{
            target:{
                value: 'teste do primeiro comentário'
            }
        })
        fireEvent.click(buttonElement)

        fireEvent.change(textAreaElement,{
            target:{
                value: 'testando o segundo comentário'
            }
        })
        fireEvent.click(buttonElement)

        const comment = screen.getAllByTestId('comment')

        expect(comment).toHaveLength(2)

    });


});