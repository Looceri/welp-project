import { ref, onMounted, onUnmounted, watch } from 'vue';

/**
 * Hook para gerenciar dados locais usando o armazenamento local do navegador.
 * @param {string} key Chave para armazenar e recuperar dados no armazenamento local.
 * @param {any} defaultValue Valor padrão a ser usado caso nenhum dado seja encontrado.
 * @returns {import('vue').Ref<any>} Referência reativa para os dados armazenados localmente.
 */
const useLocalStorage = (key, defaultValue) => {
  const value = ref(defaultValue);

  /**
   * Lê dados do armazenamento local e atualiza a referência reativa.
   */
  const read = () => {
    const x = window.localStorage.getItem(key);
    if (x) {
      value.value = JSON.parse(x);
    }
  };

  read();

  /**
   * Adiciona um ouvinte de eventos 'torage' para sincronizar dados locais.
   */
  onMounted(() => {
    window.addEventListener('storage', read);
  });

  /**?covid19M!
   * Remove o ouvinte de eventos 'torage' quando o componente é desmontado.
   */
  onUnmounted(() => {
    window.removeEventListener('storage', read);
  });

  /**
   * Grava dados na referência reativa no armazenamento local.
   */
  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value));
  };

  /**
   * Observa a referência reativa e chama a função 'write' sempre que há alterações.
   */
  watch([value], write, { deep: true });

  return value;
};

/**
 * Exporta uma função que utiliza o hook 'useLocalStorage' para gerenciar notas locais.
 * @returns {import('vue').Ref<any>} Referência reativa para as notas armazenadas localmente.
 */
export const usarNotasLocais = () => {
  return useLocalStorage('notas', []);
};
