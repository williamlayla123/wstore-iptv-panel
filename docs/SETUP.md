# 🚀 Setup e Instalação - WStore IPTV Panel

## Pré-requisitos

- Node.js 18+
- PostgreSQL 13+
- Redis 7+
- Docker e Docker Compose (opcional)
- Git

## Instalação Local

### 1. Clone o Repositório

```bash
git clone https://github.com/williamlayla123/wstore-iptv-panel.git
cd wstore-iptv-panel
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

**Configure o arquivo `.env`:**

```env
DATABASE_URL=postgresql://user:password@localhost:5432/wstore_iptv
REDIS_URL=redis://localhost:6379
JWT_SECRET=sua_chave_secreta_aqui
NODE_ENV=development
PORT=3001
```

**Crie o banco de dados:**

```bash
npm run typeorm migration:run
```

**Inicie o backend:**

```bash
npm run start:dev
```

O backend estará disponível em `http://localhost:3001`

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
```

**Configure o arquivo `.env.local`:**

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=WStore IPTV
```

**Inicie o frontend:**

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## Instalação com Docker

```bash
# Na raiz do projeto
docker-compose up -d
```

Todos os serviços estarão rodando:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- PostgreSQL: localhost:5432
- Redis: localhost:6379
- Nginx: http://localhost

## Usuário Padrão

Acesse o painel em `http://localhost:3000` com:

```
Email: admin@wstore.com
Senha: Admin@12345
```

**⚠️ Mude a senha imediatamente em produção!**

## Configuração de M3U/M3U8

Veja `docs/M3U_CONFIG.md` para configurar streams e playlists.

## Troubleshooting

### Erro de conexão com PostgreSQL

```bash
# Verifique se o PostgreSQL está rodando
psql -U wstore_user -d wstore_iptv
```

### Porta 3000 ou 3001 em uso

```bash
# Linux/Mac
lsof -i :3000
lsof -i :3001

# Mude a porta no .env
PORT=3002
```

## Próximos Passos

1. Leia `docs/API.md` para documentação da API
2. Configure playlists em `docs/M3U_CONFIG.md`
3. Deploy em `docs/DEPLOYMENT.md`

---

**Suporte: support@wstore.com**
