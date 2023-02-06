FROM pierrezemb/gostatic
COPY dist/finance-app /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
