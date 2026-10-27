# Plano de Implementação: Landing Page "Sobremesas Zero de Domingo"

## Estrutura da Página

A página será construída no arquivo `src/routes/index.tsx` utilizando componentes modulares para manter o código limpo e responsivo.

### Componentes principais:

1. `TopBar`: Barra superior de oferta.
2. `HeroSection`: Headline, subheadline, bullets, preços, botões de ação e imagem mockup.
3. `PainPointSection`: Cards sobre dificuldades com receitas comuns.
4. `BenefitSection`: Destaque dos diferenciais das receitas.
5. `FeaturesSection`: Cards detalhando categorias de receitas.
6. `BasePackageSection`: Detalhes do pacote de R$10.
7. `MaxPackageSection`: Destaque do pacote de R$19,99 (recomendado).
8. `ComparisonTable`: Tabela comparativa entre os dois pacotes.
9. `HowItWorksSection`: Passos simples de funcionamento.
10. `GuaranteeSection`: Garantia de 7 dias.
11. `FAQSection`: Seção de perguntas frequentes.
12. `Footer`: Rodapé com informações legais e suporte.

### Funcionalidade do Pop-up (Upgrade)

Um `Dialog` do Radix UI (via `src/components/ui/dialog.tsx`) será usado como pop-up de upgrade.

- Gatilho: Qualquer clique no "Pacote Base".
- Conteúdo: Comparativo entre o "Pacote Base" (R$10) e a "Versão Max Promocional" (R$17,99).
- Ação: Botões com links de redirecionamento para o checkout correspondente.

## Design e Estilo

- Paleta de cores definida via classes Tailwind personalizadas ou inline styles (conforme especificado).
- Estética premium: Fundo `#FAF6EF`, textos `#4A2E23` e detalhes em dourado `#C79A4A`.
- Responsividade: Layout mobile-first, usando Grid/Flexbox do Tailwind.

## Observações técnicas

- Uso de `lucide-react` para ícones elegantes.
- Todos os links de checkout serão configurados como constantes ou variáveis de ambiente/props para fácil manutenção.
- O componente de pop-up será gerenciado via estado local no `Index`.
