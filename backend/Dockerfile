FROM python:3.10-slim-bullseye

ENV PYTHONUNBUFFERED 1

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    build-essential \
    default-libmysqlclient-dev \
    libssl-dev \
    libffi-dev \
    libcurl4-openssl-dev \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /code && chown user:user /code

COPY requirements/ /code/requirements

RUN pip install -r /code/requirements/development.txt

RUN pip install -r /code/requirements/production.txt

ADD . /code

WORKDIR /code

USER user
w
EXPOSE 8585

CMD ["uwsgi", "--ini", "basic_auth/basic_auth/uwsgi.ini"]