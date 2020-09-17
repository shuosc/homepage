FROM node:alpine as builder
COPY . /homepage
WORKDIR /homepage
RUN yarn && yarn build

FROM nginx:alpine
COPY --from=builder /homepage/dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g daemon off;"]
EXPOSE 80
