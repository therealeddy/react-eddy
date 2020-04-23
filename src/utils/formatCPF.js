/**
 * Formata String em CPF
 */
export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Remove formatação CPF
 */
export function DformatCPF(cpf) {
  return cpf.replace(/[^\d]/g, '');
}
