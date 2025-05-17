import React from 'react'

export const homeTabs = [
  {
    label: 'Resumo',
    key: 'dashboard',
    value: 'Resumo',
    icon: 'layout-dashboard',
  },
  { label: 'Agenda', key: 'calendar', value: 'Agenda', icon: 'calendar' },
  {
    label: 'Notificações',
    key: 'notifications',
    value: 'Notificações',
    icon: 'bell',
  },
]

export const usersTabs = [
  { label: 'Usuários', key: 'users', value: 'Usuários', icon: 'user' },
  { label: 'Perfis', key: 'roles', value: 'Perfis', icon: 'shield' },
  {
    label: 'Permissões',
    key: 'permissions',
    value: 'Permissões',
    icon: 'lock',
  },
]

export const catechistsTabs = [
  { label: 'Lista', key: 'list', value: 'Listas', icon: 'list' },
  { label: 'Grupos', key: 'groups', value: 'Grupos', icon: 'user-group' },
  {
    label: 'Atividades',
    key: 'activities',
    value: 'Atividades',
    icon: 'clipboard-check',
  },
]

export const catechesisTabs = [
  {
    label: 'Inscrições',
    key: 'enrollments',
    value: 'Inscrições',
    icon: 'enrollment',
  },
  { label: 'Turmas', key: 'classrooms', value: 'Turmas', icon: 'lesson' },
  {
    label: 'Catequizandos',
    key: 'catechumens',
    value: 'Catequizandos',
    icon: 'user',
  },
  {
    label: 'Catequistas',
    key: 'catechists',
    value: 'Catequistas',
    icon: 'backoffice',
  },
]

export const sacramentsTabs = [
  { label: 'Batismo', key: 'baptism', value: 'Batismo', icon: 'baptism' },
  { label: 'Eucaristia', key: 'eucharist', value: 'Eucaristia', icon: 'eucharist' },
  { label: 'Crisma', key: 'confirmation', value: 'Crisma', icon: 'chrismas' },
  { label: 'Casamento', key: 'marriage', value: 'Casamento', icon: 'marriage' },
  {
    label: 'Reconciliação',
    key: 'confession',
    value: 'Confissão',
    icon: 'confession',
  },
  {
    label: 'Unção dos Enfermos',
    key: 'anointing',
    value: 'Unção',
    icon: 'anointing',
  },
  { label: 'Ordem', key: 'holy-orders', value: 'Ordem', icon: 'holy-orders' },
]

export const formationTabs = [
  { label: 'Cursos', key: 'courses', value: 'Cursos', icon: 'book' },
  {
    label: 'Avaliações',
    key: 'assessments',
    value: 'Avaliações',
    icon: 'file-text',
  },
  {
    label: 'Certificados',
    key: 'certificates',
    value: 'Certificados',
    icon: 'award',
  },
]

export const useSectionStore = () => {
  return {
    homeTabs,
    usersTabs,
    catechistsTabs,
    catechesisTabs,
    sacramentsTabs,
    formationTabs,
  }
}
