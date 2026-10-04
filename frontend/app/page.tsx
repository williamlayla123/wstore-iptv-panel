const plans = [
  { name: 'Básico', price: 'R$ 29', description: 'Para uso individual com acesso estável.', features: ['3 dispositivos', 'Canais selecionados', 'Suporte básico'] },
  { name: 'Premium', price: 'R$ 59', description: 'Ideal para uso familiar com mais canais.', features: ['10 dispositivos', 'Filmes e séries', 'Ativação rápida'] },
  { name: 'VIP', price: 'R$ 99', description: 'Para clientes e revendedores com alta demanda.', features: ['Acesso ilimitado', 'Suporte prioritário', 'M3U/M3U8 personalizado'] }
];

const stats = [
  { label: 'Clientes ativos', value: '12.4K' },
  { label: 'Revendedores', value: '1.8K' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Créditos vendidos', value: 'R$ 48K' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-black text-white shadow-glow">W</div>
            <div>
              <div className="text-lg font-bold">WStore</div>
              <div className="text-xs text-slate-400">IPTV Panel</div>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-slate-300">
            <a href="#plans" className="rounded-full px-3 py-2 hover:bg-white/5">Planos</a>
            <a href="#features" className="rounded-full px-3 py-2 hover:bg-white/5">Funcionalidades</a>
            <button className="rounded-full bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600">Entrar</button>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">
              Sistema completo · Web · App · SmartTV
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Painel WStore para gestão IPTV profissional.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Dashboard moderno para revenda, clientes, planos, créditos, M3U/M3U8, ativação e controle total do negócio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-brand-600">Solicitar demonstração</button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Ver funcionalidades</button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-black text-brand-300">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-500/15 via-slate-900 to-slate-950 p-6 shadow-glow">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Resumo do dia</div>
                  <div className="text-2xl font-bold">R$ 14.880</div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">+18.2%</div>
              </div>

              <div className="space-y-4">
                {[
                  ['Ativações', '256'],
                  ['Clientes novos', '42'],
                  ['Revendedores', '18'],
                  ['M3U geradas', '740'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-slate-300">{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-brand-300">Funcionalidades</div>
          <h2 className="mt-3 text-3xl font-black">Tudo que um painel IPTV moderno precisa.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Revenda', 'Controle de revendedores, comissões, clientes e distribuição de créditos.', '💼'],
            ['Clientes', 'Fluxo completo de cadastro, ativação, plano e gestão de acesso.', '👥'],
            ['M3U/M3U8', 'Geração de playlists por usuário com autenticação, categorias e expiração.', '📺'],
            ['Ativação', 'Crédito de ativação, vencimentos, planos e logs de uso.', '⚡'],
            ['Suporte', 'Tickets, mensagens e acompanhamento de pedidos do cliente.', '🎧'],
            ['Analytics', 'Dashboard com métricas em tempo real de faturamento e crescimento.', '📊'],
          ].map(([title, text, emoji]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">{emoji}</div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-brand-300">Planos</div>
          <h2 className="mt-3 text-3xl font-black">Escolha o melhor para seu negócio.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`rounded-3xl border p-6 ${index === 1 ? 'border-brand-500 bg-brand-500/10 shadow-glow' : 'border-white/10 bg-white/5'}`}>
              <div className="text-sm uppercase tracking-[0.2em] text-slate-300">{plan.name}</div>
              <div className="mt-4 text-4xl font-black">{plan.price}</div>
              <div className="mt-2 text-slate-300">{plan.description}</div>
              <ul className="mt-6 space-y-3 text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">✓ {feature}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold ${index === 1 ? 'bg-brand-500 text-white hover:bg-brand-600' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>
                Contratar
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
