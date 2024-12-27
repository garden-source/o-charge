// components/FooterMenu.tsx
export default function FooterMenu() {
    return (
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="mailto:info@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              メール
            </a>
          </li>
          <li>
            <a
              href="https://www.kakaocorp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              カカオトーク
            </a>
          </li>
          <li>
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  