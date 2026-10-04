# 📺 Configuração de M3U/M3U8 - WStore IPTV Panel

## O que é M3U/M3U8?

M3U é um formato de playlist de áudio/vídeo que contém uma lista de URLs de streams.
M3U8 é a versão UTF-8 (padrão moderno).

## Formato de uma Playlist M3U8

```m3u8
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10

#EXTINF:-1 tvg-id="1" tvg-name="SBT" tvg-logo="https://logo.url/sbt.png" group-title="Canais Abertos",SBT
http://stream.url/sbt/playlist.m3u8

#EXTINF:-1 tvg-id="2" tvg-name="Globo" tvg-logo="https://logo.url/globo.png" group-title="Canais Abertos",Globo
http://stream.url/globo/playlist.m3u8

#EXTINF:-1 tvg-id="300" tvg-name="Netflix" tvg-logo="https://logo.url/netflix.png" group-title="Filmes",Filme: Oppenheimer (2023)
http://stream.url/filmes/oppenheimer.m3u8
```

## Atributos M3U8

| Atributo | Descrição |
|----------|----------|
| `tvg-id` | ID único do canal |
| `tvg-name` | Nome exibido |
| `tvg-logo` | URL da logo/poster |
| `group-title` | Categoria do canal |
| `duration` | Duração em segundos (-1 para ao vivo) |

## Adicionando Streams ao Painel

### 1. Via API REST

```bash
curl -X POST http://localhost:3001/api/v1/admin/streams \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "SBT",
    "url": "http://stream.url/sbt/playlist.m3u8",
    "logo": "https://logo.url/sbt.png",
    "category": "Canais Abertos",
    "group": "tvg-id-1",
    "active": true
  }'
```

### 2. Via Dashboard Admin

1. Faça login em `http://localhost:3000`
2. Vá para **Admin > Streams**
3. Clique em **+ Novo Stream**
4. Preencha os dados:
   - Nome
   - URL do Stream
   - Logo/Poster
   - Categoria
   - Ativar/Desativar
5. Salve

### 3. Importar Playlist M3U8

```bash
# Na seção Admin > Importar Playlist
# Cole a URL da playlist completa:

https://raw.githubusercontent.com/example/playlist/master/canais.m3u8

# O sistema fará parse automaticamente de todos os canais
```

## Gerar M3U por Cliente

O painel gera automaticamente um M3U8 personalizado para cada cliente com:

- Token de autenticação único
- Data de expiração
- Apenas canais do plano contratado
- URL de EPG personalizada

**Exemplo de URL gerada:**

```
http://localhost:3001/api/v1/client/m3u?token=abc123xyz&user=cliente@email.com&expire=2026-12-31
```

**Client recebe:**

```
VLC, Kodi, Smart TV, Android TV Apps
```

### Como o Cliente Usa

**VLC:**
1. File > Open Network Stream
2. Cole a URL M3U8
3. Play

**Kodi:**
1. Add-ons > IPTV Simple Client
2. Configure M3U URL
3. Reinicie

**Smart TV (Android/Tizen):**
1. Instale app compatível (STB Emulator, TiviMate, etc)
2. Cole a URL M3U8
3. Aproveite!

## Categoria de Conteúdo

O sistema organiza streams por categoria:

```json
{
  "categories": [
    {
      "id": "abertos",
      "name": "Canais Abertos",
      "icon": "📺"
    },
    {
      "id": "premium",
      "name": "Canais Premium",
      "icon": "⭐"
    },
    {
      "id": "filmes",
      "name": "Filmes",
      "icon": "🎬"
    },
    {
      "id": "series",
      "name": "Séries",
      "icon": "📺"
    },
    {
      "id": "esportes",
      "name": "Esportes",
      "icon": "⚽"
    },
    {
      "id": "documentario",
      "name": "Documentários",
      "icon": "🎥"
    },
    {
      "id": "infantil",
      "name": "Infantil",
      "icon": "🧒"
    },
    {
      "id": "musica",
      "name": "Música",
      "icon": "🎵"
    }
  ]
}
```

## EPG (Guia Eletrônico de Programação)

O painel suporta EPG para mostrar programação:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">

<tv>
  <channel id="globo">
    <display-name>Globo</display-name>
    <icon src="https://logo.url/globo.png"/>
  </channel>
  
  <programme start="20260101200000 +0000" stop="20260101210000 +0000" channel="globo">
    <title>Jornal Nacional</title>
    <desc>Noticiário diário</desc>
    <category>News</category>
  </programme>
</tv>
```

## Licença de M3U/M3U8

⚖️ **IMPORTANTE:**

O painel suporta apenas streams **licenciados e legais**:

- ✅ Streaming Services (Netflix, Prime Video, Disney+)
- ✅ Canais Abertos (com autorização)
- ✅ VOD (Vídeo sob Demanda) autorizado
- ✅ Conteúdo próprio gerado
- ✅ Parceiros com contratos válidos

**❌ Proibido:**

- Conteúdo pirata
- Streams sem autorização
- Replicação de sinais privados
- Violação de direitos autorais

## Teste de Streams

```bash
# Verifique a saúde do stream
curl -I http://stream.url/playlist.m3u8

# Esperado: HTTP/1.1 200 OK
```

## Suporte

Para problemas com streams:

1. Verifique a URL está acessível
2. Confirme o token de autenticação
3. Valide a data de expiração
4. Teste com VLC localmente
5. Verifique logs: `docker logs wstore_backend`

---

**Documentação Completa: docs/API.md**
