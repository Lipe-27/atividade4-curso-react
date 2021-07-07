import React from 'react';
import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './Listar/listar-tarefas';
import CadastrarTarefa from './Cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './Atualizar/atualizar-tarefa';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} />  
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;

