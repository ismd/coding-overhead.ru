# Coding Overhead

Russian-language technology blog covering GNU/Linux, DevOps, Platform Engineering, programming, and useful utilities.

🌐 **Website**: [coding-overhead.ru](https://coding-overhead.ru)

## Project Overview

This is a Hugo static site generator project for the "Coding Overhead" blog. The site features technical content in Russian, focusing on:

- GNU/Linux system administration
- DevOps practices and tools
- Platform Engineering concepts
- Programming tutorials and cheat sheets
- Useful utilities and configurations

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- [AWS CLI](https://aws.amazon.com/cli/) (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/coding-overhead.ru.git
cd coding-overhead.ru
```

2. Initialize theme submodule:
```bash
git submodule update --init --recursive
```

3. Start development server:
```bash
hugo server -D --bind 0.0.0.0
```

The site will be available at `http://localhost:1313`

## Development

### Key Commands

**Development Server**:
```bash
# With drafts and live reload
hugo server -D --bind 0.0.0.0

# Production mode
hugo server
```

**Building**:
```bash
# Development build
hugo

# Production build
hugo --minify
```

**Content Management**:
```bash
# Create new post
hugo new posts/[post-name]/index.md

# Create new Org mode post
hugo new posts/[post-name]/index.org
```

**Deployment**:
```bash
# Deploy to AWS S3
hugo deploy --target production

# Build and deploy
hugo --minify && hugo deploy --target production
```

**Maintenance**:
```bash
# Clean generated files
rm -rf public/ resources/_gen/

# Update theme
git submodule update --remote themes/vng-blue
```

## Project Structure

```
├── content/                 # Site content
│   ├── posts/              # Blog posts
│   └── about.md            # About page
├── themes/vng-blue/        # Custom theme (git submodule)
├── assets/                 # Site assets
├── static/                 # Static files
├── hugo.yaml               # Hugo configuration
└── public/                 # Generated site (ignored)
```

## Content Creation

### Front Matter

Posts use YAML front matter:

```yaml
---
title: "Post Title"
summary: "Brief description in Russian"
categories:
  - "Category Name"
tags:
  - tag1
  - tag2
date: 2024-01-01T12:00:00
draft: false
---
```

### Supported Formats

- **Markdown** (`.md`) - Standard Hugo content
- **Org Mode** (`.org`) - Emacs Org mode format

### Categories and Tags

- **Categories**: Major topic groupings (e.g., "Настройка окружения Hyprland")
- **Tags**: Specific technologies (linux, hyprland, python, etc.)

## Theme Configuration

The site uses a custom `vng-blue` theme with features:

- Responsive design
- Social media integration
- Yandex.Metrika analytics
- HiDPI image support
- Configurable home page layout

## Deployment

The site is configured for deployment to AWS S3:

- **Bucket**: `s3://coding-overhead.ru`
- **CDN**: CloudFront distribution
- **Domain**: Custom domain with Route 53

### AWS Configuration

Ensure your AWS CLI is configured with appropriate credentials and the following services are set up:

- S3 bucket with static website hosting
- CloudFront distribution
- Route 53 hosted zone (if using custom domain)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your content following the existing patterns
4. Test locally with `hugo server -D`
5. Submit a pull request

## License

Content is available under the terms specified in individual posts. The Hugo theme and site structure are available under MIT License.

## Support

For issues related to the site or content suggestions:

- Create an issue in the repository
- Contact via social media links on the website
